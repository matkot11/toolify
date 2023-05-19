import { render, screen } from "@/test-utils";
import SignUp from "@/views/SignUp/SignUp.tsx";
import userEvent from "@testing-library/user-event";

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
  const submitButton = screen.getByRole("button", { name: "Sign Up" });
  await userEvent.click(submitButton);
};

describe("SignUp", () => {
  beforeEach(() => {
    render(<SignUp />);
  });

  it.each([
    {
      placeholderText: "Full Name"
    },
    {
      placeholderText: "Email"
    },
    {
      placeholderText: "Password"
    },
    {
      placeholderText: "Confirm Password"
    }
  ])("should allow to type in the $placeholderText field", async ({ placeholderText }) => {
    const input = screen.getByPlaceholderText(placeholderText);

    await userEvent.type(input, "test");

    expect(input).toHaveValue("test");
  });

  describe("errors", () => {
    it("should display error when fields are empty after submitting", async () => {
      await submitForm();

      expect(screen.getByText("Full name is required")).toBeDefined();
      expect(screen.getByText("Email is invalid")).toBeDefined();
      expect(screen.getByText("Password should be at least 6 characters")).toBeDefined();
      expect(screen.getByText("Confirmation password is required")).toBeDefined();
    });

    it("should display error when passwords do not match", async () => {
      await typeInput("Full Name", "Some Name");
      await typeInput("Email", "email@email.com");
      await typeInput("Password", "123456");
      await typeInput("Confirm Password", "1234567");

      await submitForm();

      expect(screen.getByText("Passwords must match")).toBeDefined();
    });
  });

  describe("success", () => {
    it("should not display any error messages after submitting", async () => {
      await typeInput("Full Name", "Some Name");
      await typeInput("Email", "email@email.com");
      await typeInput("Password", "123456");
      await typeInput("Confirm Password", "1234567");
      await submitForm();

      expect(screen.queryByText("Full name is required")).toBeNull();
      expect(screen.queryByText("Email is invalid")).toBeNull();
      expect(screen.queryByText("Password should be at least 6 characters")).toBeNull();
      expect(screen.queryByText("Confirmation password is required")).toBeNull();
    });
  });
});
