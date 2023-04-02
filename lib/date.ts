import { format } from "date-fns"

export function formatJP(str: string) {
  return format(new Date(str), "yyyy月M月d日")
}
