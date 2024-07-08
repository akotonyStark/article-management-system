import React from "react";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import '@testing-library/jest-dom/vitest'

import Navbar from "../../src/components/Navbar";
import { Provider } from "react-redux";
import {store} from '../../src/redux/store'


describe("Navbar", () => {
  it("should render the app title in header", () => {
    render(<Provider store={store}><Navbar /></Provider>);
    // screen.debug()
    const heading =  screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    expect(screen.getByText(/Article Management System/)).toBeInTheDocument()
  });
});
