import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When the Form is rendered", () => {
	it("the mandatory fields are displayed", async () => {
		render(<Form />);
		await screen.findByText("Email");
		await screen.findByText("Nom");
		await screen.findByText("Prénom");
		await screen.findByText("Personel / Entreprise");
	});

	describe("and a click is triggered on the submit button", () => {
		it("the success action is called", async () => {
			const onSuccess = jest.fn();
			render(<Form onSuccess={onSuccess} onError={() => null} />);

			fireEvent.change(screen.getByLabelText("Email"), {
				target: { value: "test@example.com" },
			});

			fireEvent.change(screen.getByLabelText("Message"), {
				target: { value: "Un message de test" },
			});

			fireEvent(
				await screen.findByTestId("button-test-id"),
				new MouseEvent("click", {
					cancelable: true,
					bubbles: true,
				})
			);
			await screen.findByText("En cours");
			await screen.findByText("Envoyer");
			expect(onSuccess).toHaveBeenCalled();
		});
	});
});

describe("and the form is submitted without required fields", () => {
	it("the success action is NOT called", async () => {
		const onSuccess = jest.fn();
		render(<Form onSuccess={onSuccess} onError={() => null} />);

		fireEvent(
			await screen.findByTestId("button-test-id"),
			new MouseEvent("click", {
				cancelable: true,
				bubbles: true,
			})
		);
		expect(onSuccess).not.toHaveBeenCalled();
	});
});
