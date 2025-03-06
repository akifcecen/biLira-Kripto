export class randomUtils {
    static getRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    static getRandomString(length: number): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  
    static getRandomBoolean(): boolean {
      return Math.random() > 0.5;
    }
  
    static getRandomElement<T>(arr: T[]): T {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
  
    static getRandomDate(start: Date, end: Date): Date {
      const startTime = start.getTime();
      const endTime = end.getTime();
      const randomTime = Math.floor(Math.random() * (endTime - startTime + 1)) + startTime;
      return new Date(randomTime);
    }
  }