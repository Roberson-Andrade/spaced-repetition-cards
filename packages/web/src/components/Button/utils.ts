import { ButtonProps } from ".";

export function selectColorBtn(variant: ButtonProps["variant"]): string {
  switch (variant) {
    case "primary": return "btn-primary";
    case "info": return "btn-info";
    default: return "btn-primary";
  }
}
