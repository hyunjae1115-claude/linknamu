export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image?: string;
  links: LinkItem[];
};

// 보여 주기용 더미 값입니다. 실제 내용으로 교체하세요.
// 프로필 사진은 public/ 폴더에 넣고 image 경로를 바꾸면 됩니다.
export const profile: Profile = {
  name: "김 클로드",
  bio: "세계 최강 바이브코더",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
