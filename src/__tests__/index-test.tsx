import { render, screen } from "@testing-library/react-native";

import Page from "@/app/index";

jest.mock("@/components/theme-toggle");

describe("<Page />", () => {
  it("Text renders correctly on home page", () => {
    render(<Page />);

    screen.getByText("Hello World!");
  });
});
