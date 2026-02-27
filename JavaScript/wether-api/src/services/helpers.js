export function getCurrentHourISO(){
    const now = new Date();
    now.setMinutes(0, 0, 0); // Set minutes, seconds, and milliseconds to zero
    return now.toISOString().slice(0,13)+":00"; // Return in ISO format up to the hour
}