import express from "express";
import xml2js, { parseString } from "xml2js";
import axios from "axios";

export const getAllCountry = async (req, res) => {
  const parser = new xml2js.Parser({ explicitArray: false, trim: true });
  try {
    const response = await axios.post(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",

      ` <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo"> 
          <soapenv:Header/> 
            <soapenv:Body>
              <web:ListOfCountryNamesByName/> 
            </soapenv:Body>
       </soapenv:Envelope> `,
      {
        headers: {
          "Content-Type": "text/xml",
        },
      }
    );
    parser.parseString(response.data, (err, result) => {
      if (err) throw err;

      // to print out just the country names

      const countries =
        result["soap:Envelope"]["soap:Body"]["m:ListOfCountryNamesByNameResponse"]
          ["m:ListOfCountryNamesByNameResult"]["m:tCountryCodeAndName"];
      res.json({
        message: "list of countries Retrived Successfully",
        countries,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountryCapital = async (req, res) => {
  const { sCountryISOCode } = req.body;

  // Call the CapitalCity SOAP API using axios
  try {
    const response = await axios.post(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
      `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
            <soapenv:Header/>
            <soapenv:Body>
              <web:CapitalCity>
                <web:sCountryISOCode>${sCountryISOCode}</web:sCountryISOCode>
              </web:CapitalCity>
            </soapenv:Body>
          </soapenv:Envelope>
        `,
      {
        headers: { "Content-Type": "text/xml" },
      }
    );

    // Extract the capital city from the SOAP response
    const xmlResponse = response.data;
    parseString(xmlResponse, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const capital =
          result["soap:Envelope"]["soap:Body"][0]["m:CapitalCityResponse"][0][
            "m:CapitalCityResult"
          ][0];
        res.status(200).json({ capital });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountryCurrency = async (req, res) => {
  const { sCountryISOCode } = req.body;

  // Call the CountryCurrency SOAP API using axios
  try {
    const response = await axios.post(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
      `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
            <soapenv:Header/>
            <soapenv:Body>
              <web:CountryCurrency>
                <web:sCountryISOCode>${sCountryISOCode}</web:sCountryISOCode>
              </web:CountryCurrency>
            </soapenv:Body>
          </soapenv:Envelope>
        `,
      {
        headers: { "Content-Type": "text/xml" },
      }
    );

    // Extract the country currency from the SOAP response
    const xmlResponse = response.data;
    parseString(xmlResponse, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const currency =
          result["soap:Envelope"]["soap:Body"][0][
            "m:CountryCurrencyResponse"
          ][0]["m:CountryCurrencyResult"][0];
        res.status(200).json({ currency });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountryFlag = async (req, res) => {
  const { sCountryISOCode } = req.body;

  // Call the Flag SOAP API using axios
  try {
    const response = await axios.post(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
      `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
            <soapenv:Header/>
            <soapenv:Body>
              <web:CountryFlag>
                <web:sCountryISOCode>${sCountryISOCode}</web:sCountryISOCode>
              </web:CountryFlag>
            </soapenv:Body>
          </soapenv:Envelope>
        `,
      {
        headers: { "Content-Type": "text/xml" },
      }
    );

    // Extract the country flag from the SOAP response
    const xmlResponse = response.data;
    parseString(xmlResponse, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const flag =
          result["soap:Envelope"]["soap:Body"][0]["m:CountryFlagResponse"][0][
            "m:CountryFlagResult"
          ][0];
        res.status(200).json({ flag });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountryPhoneCode = async (req, res) => {
  const { sCountryISOCode } = req.body;

  // Call the Country Phonecode SOAP API using axios
  try {
    const response = await axios.post(
      "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
      `
          <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
            <soapenv:Header/>
            <soapenv:Body>
              <web:CountryIntPhoneCode>
                <web:sCountryISOCode>${sCountryISOCode}</web:sCountryISOCode>
              </web:CountryIntPhoneCode>
            </soapenv:Body>
          </soapenv:Envelope>
        `,
      {
        headers: { "Content-Type": "text/xml" },
      }
    );

    // Extract the country phonecode from the SOAP response
    const xmlResponse = response.data;
    parseString(xmlResponse, function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        const phoneCode =
          result["soap:Envelope"]["soap:Body"][0][
            "m:CountryIntPhoneCodeResponse"
          ][0]["m:CountryIntPhoneCodeResult"][0];
        res.status(200).json({ phoneCode });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
