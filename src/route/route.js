import express from 'express'
import { getAllCountry, getCountryCapital, getCountryCurrency, getCountryFlag, getCountryPhoneCode } from '../controller/countryInfo.js'

 const countryRouter = express.Router()

countryRouter.post('/name', getAllCountry)
countryRouter.post('/capital', getCountryCapital)
countryRouter.post('/currency', getCountryCurrency)
countryRouter.post('/flag', getCountryFlag)
countryRouter.post('/phonecode', getCountryPhoneCode)

export default countryRouter