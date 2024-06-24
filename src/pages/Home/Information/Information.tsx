import {
  BusinessWrap,
  BussinesText,
  ImgAndTitleBox,
  InformationWrap,
  ItemWrap,
  LiTag,
  TextColor,
} from "../Information/Information.elements.tsx";

export function Information() {
  const items = [
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/settings.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/cloud.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/box-data.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/menu.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/settings.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/cloud.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/box-data.svg",
    },
    {
      title: "ERPs Platforms",
      img: "./src/assets/icons/menu.svg",
    },
  ];

  return (
    <BusinessWrap>
      <ul>
        <LiTag>Always The Best</LiTag>
      </ul>

      <BussinesText>
        Types Of <TextColor>SaaS Applications</TextColor> We Deliver
      </BussinesText>
      <InformationWrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </InformationWrap>
      <ItemWrap>
        {items.map((items, index) => (
          <ImgAndTitleBox key={index}>
            <img src={items.img} alt="sol" />
            <p>{items.title}</p>
          </ImgAndTitleBox>
        ))}
      </ItemWrap>
    </BusinessWrap>
  );
}
