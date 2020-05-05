import { Comment } from './comment';

export class Thread {
  id: string;
  username: string;
  profile: string;
  postbody: string;
  date: string;
  comments: Comment[];
}
