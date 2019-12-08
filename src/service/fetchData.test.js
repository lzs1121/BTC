import { getPosts } from "./fetchData";
import { axios as mockAxios } from "../__mock__/axios";
describe("api test", () => {
    test("fetching data is successful", async () => {
        const res = await getPosts();
        expect(res.data).not.toBeUndefined();
    });

    test("mock api call", () => {
        mockAxios.get.mockImplementationOnce(() => Promise.resolve("test"));
        return mockAxios.get().then(response => {
            expect(response).toEqual("test");
        });
    });
});