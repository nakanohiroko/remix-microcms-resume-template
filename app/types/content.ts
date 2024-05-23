import type {
  MicroCMSImage,
} from 'microcms-js-sdk';

export interface Content {
  name: string;
  occupation:string;
  contacts: contact[];
  backgroundColor:string;
  textColor:string;
  profileImage:MicroCMSImage;
  summary:string;
  lastUpdate:Date;
  skills:skill[];
  selfPresentations:selfPresentation[];
  careers:career[];
}

// カスタムフィールド > contactの型定義
export type contact = {
  id:string;
  fieldId: 'contact';
  name: string;
  url: string;
};

// カスタムフィールド > skillの型定義
export type skill = {
  id:string;
  fieldId: 'skill';
  name: string;
  years: number;
  level:string;
};

// カスタムフィールド > selfPresentationの型定義
export type selfPresentation = {
  id:string;
  fieldId: 'selfPresentation';
  headline: string;
  content:string;
};

// カスタムフィールド > careerの型定義
export type career = {
  id:string;
  fieldId: 'career';
  company: string;
  period:string;
  business:string;
  stock:string;
  employees:number;
  projects:project[];
};

// カスタムフィールド > projectの型定義
export type project = {
  id:string;
  fieldId: 'project';
  name: string;
  period:string;
  content:string;
};