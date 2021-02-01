import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import App from "../App";

configure({ adapter: new Adapter() });

describe("renders the component", () => {
    it("render correctly", () => {
        // const wrapper = shallow(<App />);
        // expect(wrapper).toMatchSnapshot();
    });

    it("form cant submitted with wrong or empty values", () => {
        const component = mount(<App />);

        const input = component.find(".auth-form-input input");

        input.at(1).simulate("focus");
        input.at(1).simulate("change", { target: { value: "abc" } });

        component.find('[type="submit"]').simulate("click");
        expect(input.state("error")).toBeDefined();
    });
});
