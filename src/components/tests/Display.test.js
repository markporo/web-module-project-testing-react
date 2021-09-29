import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Display from './../Display';
import Show from './../Show';


const testShow = {
    //add in approprate test data structure here.
    name: "Stranger Things",
    summary: "It's a really good show",
    seasons: [{ id: 0, name: "episode 1", episodes: [] }, { id: 1, name: "episode 2", episodes: [] }, { id: 2, name: "episode 3", episodes: [] }]
}


test("The Display component renders without any passed in props", () => {
    render(<Display />);
})

test("when the fetch button is pressed, the show component will display", async () => {


    render(<Display />);

    const button = screen.queryByRole('button')
    fireEvent.click(button);


    await waitFor(() => expect(screen.getByTestId("show-container")).toBeInTheDocument())
})


// ********** ????
test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", async () => {
    render(<Display />);

    const button = screen.queryByRole('button')
    fireEvent.click(button);

    await waitFor(() => expect(screen.getAllByTestId("season-option")).toHaveLength(4))
})


test("when the fetch button is pressed, this mock displayFun function is called", async () => {
    const fakeDisplayFunc = jest.fn(() => {
        return "fetch button pressed and shows display"
    })

    render(<Display displayFunc={() => fakeDisplayFunc("fake arg")} />);

    fireEvent.click(screen.queryByRole('button'));
    // fireEvent.click(screen.queryByRole('button'));

    await waitFor(() => expect(fakeDisplayFunc).toHaveBeenCalled())
})












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.