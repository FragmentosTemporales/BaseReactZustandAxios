import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const API_URL = `${baseUrl}/graphql_empresa/`;


const QUERY_VER_EMPRESAS = `
  query VerEmpresas {
    empresas {
      id
      nombre
      run
      website
      creado
    }
  }
`;

export const getEmpresas = async () => {
  try {
    const response = await axios.post(API_URL, {
      query: QUERY_VER_EMPRESAS
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    return response.data.data.empresas;
  } catch (error) {
    console.error('Error al obtener empresas:', error);
    throw error;
  }
};


export const executeGraphQLQuery = async (query, variables = {}) => {
  try {
    const response = await axios.post(API_URL, {
      query,
      variables
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error en query GraphQL:', error);
    throw error;
  }
};