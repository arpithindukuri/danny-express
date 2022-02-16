import Button from "../../components/Button";
import Train from "../../components/Train";
import { HeroText } from "../../components/HeroText";
import CodeBlock from "../../components/CodeBlock";

export default function Hero() {
  return (
    <div
      className="flex xs:flex-col xl:flex-row-reverse
                justify-around items-center
                box-border xs:p-16 md:p-32 xl:p-40"
    >
      <div
        className="flex flex-col justify-center
                  xs:ml-0 xl:ml-16"
      >
        <Train />
      </div>
      <div
        className="w-fit flex flex-col justify-center
                  xs:mt-16 xl:mt-0"
      >
        <HeroText type="secondary" text="hi, welcome to" />
        <div className="flex w-fit mb-12">
          <HeroText type="primary" text="danny." />
          <HeroText type="primary-colored" text="express" />
        </div>
        <CodeBlock>
          {"// a collection of software experiences,"}
          <br />
          {"// created by me"}
        </CodeBlock>
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
