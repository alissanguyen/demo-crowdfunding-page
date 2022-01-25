import Pledge from "./Pledge";

const ModalPledges = () => {
  const pledges = [
    {
      divClass: "pledge",
      pledgeId: "modalPledge--noreward",
      main: {
        divClass: "pledge__main-container pledge__main-container--noreward",
        inputId: "reward-none",
        dataGroup: "noreward",
        text: "Pledge with no reward",
        description:
          "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      },
      form: {
        dataGroup: "noreward",
        inputId: "amount-noreward",
        inputName: "pledge-noreward",
        min: "1",
        val: "10",
        buttonId: "submit-noreward",
        ariaLabel: "submit pledge amount no reward",
      },
    },
    {
      divClass: "pledge",
      pledgeId: "modalPledge--bamboo",
      main: {
        divClass: "pledge__main-container",
        inputId: "reward-bamboo",
        text: "Bamboo Stand",
        requirement: "Pledge $25 or more",
        description:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        footer: "101",
        footerClass: "number number--modal number--bamboo",
      },
      form: {
        inputId: "amount-bamboo",
        inputName: "pledge-amount",
        min: "25",
        val: "25",
        buttonId: "submit-bamboo",
        ariaLabel: "submit pledge amount for bamboo stand reward",
      },
    },
    {
      divClass: "pledge",
      pledgeId: "modalPledge--black",
      main: {
        divClass: "pledge__main-container",
        inputId: "reward-black",
        text: "Black Edition Stand",
        requirement: "Pledge $75 or more",
        description:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        footer: "64",
        footerClass: "number number--modal number--black",
      },
      form: {
        inputId: "amount-black",
        inputName: "pledge-amount",
        min: "75",
        val: "75",
        buttonId: "submit-black",
        ariaLabel: "submit pledge amount for black stand reward",
      },
    },
    {
      divClass: "pledge pledge--unavailable",
      pledgeId: "modalPledge--mahogany",
      main: {
        divClass: "pledge__main-container",
        inputId: "reward-mahogany",
        text: "Mahogany Special Edition",
        requirement: "Pledge $200 or more",
        description:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        footer: "0",
        footerClass: "number number--modal number--mahogany",
      },
      form: {
        inputId: "amount-mahogany",
        inputName: "pledge-mahogany",
        min: "200",
        val: "200",
        buttonId: "submit-mahogany",
        ariaLabel: "submit pledge amount for mahogany stand reward",
      },
    },
  ];
  return (
    <div className="modal__pledge-selection">
      {pledges.map((pledge) => (
        <Pledge pledge={pledge} />
      ))}
    </div>
  );
};

export default ModalPledges;
