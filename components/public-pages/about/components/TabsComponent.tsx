import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Components
import TabContainer from "./TabContainer";

function TabsComponent() {
  const [key, setKey] = useState<string | null | any>("mission"); // Set the initial state to a valid string value

  return (
    <section className="container-wide light-grey-background py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="mission" title="OUR MISSION">
              <TabContainer
                title="Lorem ipsum dolor sit amet consectetur."
                description="Lorem ipsum dolor sit amet consectetur. Donec ac aenean lobortis consectetur turpis felis vel nisl augue. Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec. In in gravida feugiat id ut massa enim. "
                subDescription="Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec."
                image1="/about-computer-img.png"
                image2="/about-discussion-img.png"
              />
            </Tab>
            <Tab eventKey="vision" title="OUR VISION">
              <TabContainer
                title="Lorem ipsum dolor sit amet consectetur."
                description="Lorem ipsum dolor sit amet consectetur. Donec ac aenean lobortis consectetur turpis felis vel nisl augue. Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec. In in gravida feugiat id ut massa enim. "
                subDescription="Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec."
                image1="/about-computer-img.png"
                image2="/about-discussion-img.png"
              />
            </Tab>
            <Tab eventKey="approach" title="OUR APPROACH">
              <TabContainer
                title="Lorem ipsum dolor sit amet consectetur."
                description="Lorem ipsum dolor sit amet consectetur. Donec ac aenean lobortis consectetur turpis felis vel nisl augue. Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec. In in gravida feugiat id ut massa enim. "
                subDescription="Sed arcu nisl varius sed fermentum. Nibh ut at gravida vulputate. Leo congue dignissim dictum aliquam viverra donec."
                image1="/about-computer-img.png"
                image2="/about-discussion-img.png"
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default TabsComponent;
