export interface CurrentUser {
  image: string;
  name: string;
  username: string;
}

export interface Replies {
  content: string;
  replyingTo: string;
  user: CurrentUser;
}

export interface Comment {
  id: number;
  content: string;
  user: CurrentUser;
  replies: Replies[];
}

export interface ProductFeedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

export interface ProductFeedbacks {
  currentUser: CurrentUser;
  productFeedbackList: ProductFeedback[];
}
