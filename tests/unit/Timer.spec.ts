import {shallowMount} from "@vue/test-utils";
import Timer from "@/components/Timer.vue";

jest.useFakeTimers();

describe("HelloWorld.vue", () => {
    it("Reduces time and emits event at 0", () => {
        const wrapper = shallowMount(Timer);
        const tenSeconds = 10000;
        jest.advanceTimersByTime(tenSeconds);

        expect(wrapper.vm.$data.timer).toBe(0);
        expect(wrapper.emitted().timesUp).toBeTruthy();

        jest.advanceTimersByTime(tenSeconds);
        expect(wrapper.vm.$data.timer).toBe(0);
    });
});
