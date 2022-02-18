import Button from "../../components/Button";
import Train from "../../components/Train";
import { HeroText } from "../../components/HeroText";
import CodeBlock from "../../components/CodeBlock";

export default function Hero() {
  return (
    <div
      className="flex xs:flex-col xl:flex-row-reverse
                justify-around items-center
                xs:p-16 md:p-24 xl:p-32"
    >
      <div className="flex justify-center">
        <Train />
      </div>
      <div
        className="xs:mr-0 xl:mr-20
                  xs:mt-20 xl:mt-0"
      >
        <div className="w-fit flex flex-col justify-center">
          <HeroText type="secondary" text="hi, welcome to" />
          <div className="flex w-fit">
            <HeroText type="primary" text="danny." />
            <HeroText type="primary-colored" text="express" />
          </div>
        </div>
        <div className="mt-16">
          <CodeBlock>
            {"// a collection of software experiences,"}
            <br />
            {"// created by me"}
          </CodeBlock>
        </div>
        <div
          className="flex xs:flex-col sm:flex-row
                    mt-16
                    xs:space-y-6 sm:space-y-0
                    xs:space-x-0 sm:space-x-6"
        >
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </div>
      </div>
    </div>
  );
}
