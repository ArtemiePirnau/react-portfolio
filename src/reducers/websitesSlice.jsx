import { createSlice } from "@reduxjs/toolkit";
const websitesItemsSlice = createSlice({
  name: "websitesList",
  initialState: {
    websitesList: [
      {
        id: 0,
        img: "https://user-images.githubusercontent.com/92051961/189170278-cebe726c-b700-462c-9bca-f4b6481514b5.png",
        link: "https://artemiepirnau.github.io/course-landing-page/",
      },
      {
        id: 1,
        img: "https://user-images.githubusercontent.com/92051961/189170521-20b86619-f74e-4cdc-8e43-998e36096444.png",
        link: "https://artemiepirnau.github.io/tunning-landing-page/",
      },
      {
        id: 2,
        img: "https://user-images.githubusercontent.com/92051961/189170805-d5d939a2-f88e-492f-94ab-b339290a7675.png",
        link: "https://artemiepirnau.github.io/qwery-landing-page/",
      },
      {
        id: 3,
        img: "https://user-images.githubusercontent.com/92051961/189171162-a1de364f-4de6-4312-b59b-f941c26ed15f.png",
        link: "https://artemiepirnau.github.io/dev-landing-page/",
      },
      {
        id: 4,
        img: "https://user-images.githubusercontent.com/92051961/189171336-9e70633b-31ad-4aa0-8e52-92eb37c5ca8b.png",
        link: "https://artemiepirnau.github.io/ecology-landing-page/",
      },
      {
        id: 5,
        img: "https://user-images.githubusercontent.com/92051961/189171569-95af6733-704e-454c-bd32-61df5a7ed4d5.png",
        link: "https://artemiepirnau.github.io/shoes-shop/",
      },
      {
        id: 6,
        img: "https://user-images.githubusercontent.com/92051961/189171758-435b5e5f-c0cc-4936-b92d-7f0e2dc20097.png",
        link: "https://artemiepirnau.github.io/lunajs-landing-page/",
      },
      {
        id: 7,
        img: "https://user-images.githubusercontent.com/92051961/189171932-5ba9b7f5-ed47-4171-9495-b88c12b80bc2.png",
        link: "https://artemiepirnau.github.io/furniture-order/",
      },
      {
        id: 8,
        img: "https://user-images.githubusercontent.com/92051961/189172078-878bc949-3f9c-4471-95e1-d26dbb58604c.png",
        link: "https://artemiepirnau.github.io/photographer-landing-page/",
      },
      {
        id: 9,
        img: "https://user-images.githubusercontent.com/92051961/189172228-25464239-d108-4d00-b9f3-196be5f62f89.png",
        link: "https://artemiepirnau.github.io/cinema-landing-page/",
      },
      {
        id: 10,
        img: "https://user-images.githubusercontent.com/92051961/189172368-07c512a8-34db-4120-89c3-349c00887efe.png",
        link: "https://artemiepirnau.github.io/cybersecurity-landing-page/",
      },
      {
        id: 11,
        img: "https://user-images.githubusercontent.com/92051961/189172519-0ef663d3-1bbf-430d-a276-4ce5a658c92f.png",
        link: "https://artemiepirnau.github.io/mentor-landing-page/dist/index.html",
      },
      {
        id: 12,
        img: "https://user-images.githubusercontent.com/92051961/189172655-69ff96f7-8761-43f1-bf6d-8dcf34915012.png",
        link: "https://artemiepirnau.github.io/social-media-ui/dist/",
      },
      {
        id: 13,
        img: "https://user-images.githubusercontent.com/92051961/189172803-515e5129-7522-4c7d-b270-4314c1533242.png",
        link: "https://artemiepirnau.github.io/blog-ui/dist/",
      },
      {
        id: 14,
        img: "https://user-images.githubusercontent.com/92051961/189172919-bf5c2b4d-d094-4eed-990c-3b50e32f1774.png",
        link: "https://artemiepirnau.github.io/3d-courses-ui/dist/",
      },
      {
        id: 15,
        img: "https://user-images.githubusercontent.com/92051961/189174230-20b1345b-2b8f-4973-bb3d-9919500fcdf8.png",
        link: "https://artemiepirnau.github.io/mars-travel-landing/dist/",
      },
      {
        id: 16,
        img: "https://user-images.githubusercontent.com/92051961/190860790-dd698c53-73d7-42ee-a463-fe643e03577d.png",
        link: "https://artemiepirnau.github.io/autoprokat-landing/dist/",
      },
      {
        id: 17,
        img: "https://user-images.githubusercontent.com/92051961/190860797-a72c86b4-48a4-46d4-8883-b8e22f7c8879.png",
        link: "https://artemiepirnau.github.io/autoprokat-landing/dist/product.html",
      },
    ],
  },
});
export default websitesItemsSlice.reducer;
