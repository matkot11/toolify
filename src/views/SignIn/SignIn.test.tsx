import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import SignIn from "@/views/SignIn/SignIn.tsx";

const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const router: object = await vi.importActual("react-router-dom");
  return {
    ...router,
    useNavigate: () => mockedNavigate
  };
});

const typeInput = async (placeholderText: string, value: string) => {
  const input = screen.getByPlaceholderText(placeholderText);

  await userEvent.type(input, value);
};

const submitForm = async () => {
  const submitButton = screen.getByRole("button", { name: "Sign In" });
  await userEvent.click(submitButton);
};

describe("SignIn", () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it.each([
    {
      placeholderText: "Email"
    },
    {
      placeholderText: "Password"
    }
  ])("should allow to type in the $placeholderText field", async ({ placeholderText }) => {
    const input = screen.getByPlaceholderText(placeholderText);

    await userEvent.type(input, "test");

    expect(input).toHaveValue("test");
  });

  describe("errors", () => {
    it("should display error when fields are empty after submitting", async () => {
      await submitForm();

      expect(screen.getByText("Email is invalid")).toBeDefined();
      expect(screen.getByText("Password is required")).toBeDefined();
    });
  });

  describe("success", () => {
    it("should not display any error messages after submitting", async () => {
      await typeInput("Email", "email@email.com");
      await typeInput("Password", "123456");
      await submitForm();

      expect(screen.queryByText("Email is invalid")).toBeNull();
      expect(screen.queryByText("Password is required")).toBeNull();
    });
  });
});
