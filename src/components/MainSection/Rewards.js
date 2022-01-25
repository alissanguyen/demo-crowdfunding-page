import Reward from "./Reward";
const Rewards = () => {
  const rewards = [
    {
      class: "reward",
      heading: "Bamboo Stand",
      requirement: "Pledge $25 or more",
      about:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      footerNumber: "101",
      buttonText: "Select Reward",
      footerClass: "number number--bamboo",
      dataGroup: "bamboo",
      buttonClass: "btn btn--teal btn--reward modal-trigger",
      ariaLabel: "open modal and select bamboo stand reward",
    },
    {
      class: "reward",
      heading: "Black Edition Stand",
      requirement: "Pledge $75 or more",
      about:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      footerNumber: "64",
      buttonText: "Select Reward",
      footerClass: "number number--black",
      dataGroup: "black",
      buttonClass: "btn btn--teal btn--reward modal-trigger",
      ariaLabel: "open modal and select black stand reward",
    },
    {
      class: "reward reward--unavailable",
      heading: "Mahogany Special Edition",
      requirement: "Pledge $200 or more",
      about:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      footerNumber: "0",
      buttonText: "Out of Stock",
      footerClass: "number number--mahogany",
      dataGroup: "mahogany",
      buttonClass: "btn btn--reward btn--teal",
      ariaLabel: "open modal and select mahogany stand reward",
    },
  ];
  return (
    <div class="about__rewards">
      {rewards.map((reward) => (
        <Reward reward={reward} />
      ))}
    </div>
  );
};

export default Rewards;
