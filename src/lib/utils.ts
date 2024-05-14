import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function timeAgo(dateString:string){
  // Calculate the difference in milliseconds
  const eventDate = new Date(dateString)
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - eventDate.getTime();
 // Convert the difference from milliseconds to days and hours
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const differenceInHours = Math.floor(differenceInTime / (1000 * 3600));

  // Decide whether to display days or hours
  if (differenceInDays >= 1) {
    return `${differenceInDays} d`;
  } else if (differenceInHours >= 1) {
    return `${differenceInHours} h`;
  } else {
    return `Less than an hour ago`;
  }

}