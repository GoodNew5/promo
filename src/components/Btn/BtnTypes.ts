export enum BtnVariants {
  one = 'one',
  two = 'two'
}

export interface BtnProps {
  variant?: BtnVariants
  disabled?: boolean
  isLoading?: boolean
}
