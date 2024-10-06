declare module "*.md" {
  const content: React.FC;
  export default content;
}

declare module "*.mdx" {
  const content: React.FC;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}
