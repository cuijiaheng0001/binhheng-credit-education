import dynamic from 'next/dynamic'

const ConsultationModal = dynamic(
  () => import('./ConsultationModal'),
  { ssr: false }
)

export default ConsultationModal