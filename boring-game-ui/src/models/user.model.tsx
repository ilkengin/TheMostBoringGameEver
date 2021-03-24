export default class User {
  userId: string;

  score: number;

  constructor(userId?: string, score?: number) {
    this.userId = userId || '';
    this.score = score || 0;
  }
}
