import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "../../../src/ui/App.vue";

/**
 * This test is a placeholder for the existing component and not at all
 * rigourous in its specification.
 */

describe("App.vue", () => {
    it("Renders properly", () => {
        const wrapper = shallowMount(App, {});
        expect(wrapper.html()).to.include("<h1></h1>");
    });
});
