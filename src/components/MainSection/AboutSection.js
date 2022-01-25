import Rewards from "./Rewards";

const AboutSection = () => {
  return (
    <section class="about section">
      <div class="about__text">
        <h2 class="heading heading--secondary">About this project</h2>
        <p class="paragraph paragraph--about">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p class="paragraph paragraph--about">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <Rewards />
    </section>
  );
};

export default AboutSection;
