import { ButtonProps } from '.';

export function selectColorBtn(variant: ButtonProps['variant']): string {
  switch (variant) {
    case 'primary': return 'btn-primary';
    default: return 'btn-primary';
  }
}
