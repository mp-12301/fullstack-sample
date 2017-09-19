import React from "react";
import { shallow } from "enzyme";

import App from "../src/common/App/App";
import Repository from "../src/common/App/components/Repository";

describe("components", () => {
  describe("App", () => {
    const wrapper = shallow(<App />);

    it("should have all its subcomponents", () => {
      expect(wrapper.find("input .form-control .input-lg .input-user").exists()).toBe(true);
      expect(wrapper.find("button .btn .btn-primary .btn-lg .button-get").exists()).toBe(true);
      expect(wrapper.find("div .repo-grid").exists()).toBe(true);
    });
  });

  describe("Repository", () => {
    const wrapper = shallow(<Repository />);

    it("should have all its subcomponents", () => {
      expect(wrapper.find("div .repo-row").exists()).toBe(true);
      expect(wrapper.find("div .repo-name").exists()).toBe(true);
      expect(wrapper.find("div .repo-desc").exists()).toBe(true);
      expect(wrapper.find("div .repo-status").exists()).toBe(true);
    });

    it("should display data correctly", () => {
      const repo = {
        name: "foobar",
        url: "urlToFoobar.com",
        description: "this is a fake repo",
        language: "Javascript",
        stars: 5,
        forks: 3,
      };
      wrapper.setProps({ ...repo });

      expect(wrapper.find("div .repo-name").html())
        .toEqual(`<div class="repo-name"><a href="${repo.url}">${repo.name}</a></div>`);
      expect(wrapper.find("div .repo-desc").text())
        .toEqual(repo.description);
      expect(wrapper.find("div .repo-lan").text()).toEqual(repo.language);
      expect(wrapper.find("div .repo-stars").text()).toEqual(`Stars: ${repo.stars}`);
      expect(wrapper.find("div .repo-forks").text()).toEqual(`Forks: ${repo.forks}`);
    });
  });
});
