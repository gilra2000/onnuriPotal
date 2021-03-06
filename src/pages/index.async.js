import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Post = asyncRoute(() => import('./Post'));
export const Posts = asyncRoute(() => import('./Posts'));
export const Users = asyncRoute(() => import('./Users'));
export const Welcome = asyncRoute(() => import('./menu1/Welcome'));
export const OnnuriVote = asyncRoute(() => import('./onnuriVote/index'));
export const OnnuriExequies = asyncRoute(() => import('./onnuriExequies/index'));
export const Kakao = asyncRoute(() => import('./kakao/index'));
