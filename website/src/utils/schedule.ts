/**
 * Performance optimization utilities for scheduling and chunking work
 */

/**
 * Chunks long-running tasks to avoid blocking the main thread
 * @param items Array of items to process
 * @param processItem Function to process each item
 * @param chunkSize Number of items to process per chunk
 */
export async function chunkWork<T>(
  items: T[],
  processItem: (item: T, index: number) => void,
  chunkSize: number = 5
): Promise<void> {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    
    // Process current chunk
    chunk.forEach((item, index) => processItem(item, i + index));
    
    // Yield to browser to handle other tasks
    if (i + chunkSize < items.length) {
      await new Promise(resolve => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(resolve as IdleRequestCallback);
        } else {
          setTimeout(resolve, 0);
        }
      });
    }
  }
}

/**
 * Debounces a function to limit how often it can be called
 * @param func Function to debounce
 * @param wait Wait time in milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Batches DOM reads and writes to avoid forced reflows
 */
export class DOMBatcher {
  private reads: (() => void)[] = [];
  private writes: (() => void)[] = [];
  private scheduled = false;

  read(fn: () => void) {
    this.reads.push(fn);
    this.schedule();
  }

  write(fn: () => void) {
    this.writes.push(fn);
    this.schedule();
  }

  private schedule() {
    if (this.scheduled) return;
    
    this.scheduled = true;
    requestAnimationFrame(() => {
      this.flush();
    });
  }

  private flush() {
    // Execute all reads first
    const reads = this.reads.slice();
    this.reads = [];
    reads.forEach(fn => fn());

    // Then execute all writes
    const writes = this.writes.slice();
    this.writes = [];
    writes.forEach(fn => fn());

    this.scheduled = false;
  }
}

// Singleton instance
export const domBatcher = new DOMBatcher();