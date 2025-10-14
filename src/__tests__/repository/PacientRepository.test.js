import Pacient from "../../models/Pacient.js";
import PacientRepository from "../../repository/PacientRepository.js";
import db from "../database/setup.js";

const name = "Maria";
const birthDate = "1980-01-10";
const email = "maria@gg.com";
const phone = " 11 98877-2001";

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});

describe("Pacient Repository Test", () => {
  it("Should create Pacient sucessfully when correct values are inserted", async () => {
    const pacient = new Pacient({
      name,
      birthDate,
      email,
      phone,
    });
    const expectedPacient = await PacientRepository.savePacient(pacient);

    expect(expectedPacient.name).toBe(name);
    expect(expectedPacient.birthDate.toISOString()).toBe(
      "1980-01-10T00:00:00:000Z"
    );
    expect(expectedPacient.email).toBe(email);
    expect(expectedPacient.phone).toBe(phone);
  });

  it("Should receive error when missing name", async () => {
    const name = null;
    const pacient = new Pacient({
      name,
      birthDate,
      email,
      phone,
    });

    expect(async () => {
      await PacientRepository.savePacient(pacient);
    }).rejects.toThrow(
      new Error("ValidationError: name: Pacient name is required.")
    );
  });

  it("Should receive error when missing bith Date", async () => {
    const birthDate = null;
    const pacient = new Pacient({
      name,
      birthDate,
      email,
      phone,
    });

    expect(async () => {
      await PacientRepository.savePacient(pacient);
    }).rejects.toThrow(
      new Error("ValidationError: birthDate: Date of birth is required.")
    );
  });

  it("Should receive error when missing email", async () => {
    const email = null;
    const pacient = new Pacient({
      name,
      birthDate,
      email,
      phone,
    });

    expect(async () => {
      await PacientRepository.savePacient(pacient);
    }).rejects.toThrow(new Error("ValidationError: email: Email is required."));
  });

  it("Should receive error when missing phone", async () => {
    const phone = null;
    const pacient = new Pacient({
      name,
      birthDate,
      email,
      phone,
    });

    expect(async () => {
      await PacientRepository.savePacient(pacient);
    }).rejects.toThrow(
      new Error("ValidationError: phone: Phone number is required.")
    );
  });
});
