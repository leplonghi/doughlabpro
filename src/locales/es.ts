
const esTranslations = {
  translation: {
    header: {
      devMode: 'Modo de Desarrollo - Autenticación Omitida'
    },
    calculator: {
      title: 'Calculadora DoughLab Pro',
      subtitle: 'Crea recetas de masa para pizza y pan',
      flour: 'Harina',
      hydration: 'Hidratación',
      ingredients: {
        amountDescription: 'La cantidad total de harina en gramos',
        hydrationDescription: 'Porcentaje de la relación agua-harina',
        yeastType: 'Tipo de Levadura',
        yeastDescription: 'Selecciona el tipo de levadura que estás usando',
        freshYeast: 'Levadura Fresca',
        dryYeast: 'Levadura Seca',
        ballWeight: 'Peso de la Bola de Masa',
        ballWeightDescription: 'Peso de cada bola de masa individual',
        ballCountResult: 'Hace aproximadamente {{count}} bola(s) de masa'
      },
      steps: {
        doughType: 'Tipo de Masa',
        doughTypeDesc: 'Elige entre masa para pizza o pan para personalizar tu receta.',
        pizzaStyle: 'Estilo de Pizza',
        pizzaStyleDesc: 'Selecciona un estilo de pizza para determinar la hidratación e ingredientes.',
        breadStyle: 'Estilo de Pan',
        breadStyleDesc: 'Elige un estilo de pan para determinar la formulación óptima de la receta.',
        fermentation: 'Método de Fermentación',
        fermentationDesc: 'Elige un método de fermentación para afectar el desarrollo del sabor y el tiempo.',
        ingredients: 'Ingredientes',
        ingredientsDesc: 'Ajusta la cantidad de harina, hidratación y otros ingredientes para personalizar tu receta.'
      },
      actions: {
        calculate: 'Calcular Receta',
        reset: 'Reiniciar'
      }
    },
    auth: {
      signIn: 'Iniciar Sesión',
      signInToAccess: 'Inicia sesión para acceder a todas las funciones',
      continueWithGoogle: 'Continuar con Google',
      signInFailed: 'Error al iniciar sesión',
      unexpectedError: 'Ocurrió un error inesperado',
      unlockProFeatures: 'Inicia sesión para desbloquear funciones premium',
      continueWith: 'Continuar con',
      continueAsGuest: 'Continuar como Invitado',
      signInSuccess: 'Sesión iniciada con éxito',
      redirecting: 'Redirigiendo a la página principal',
      signInWithGoogle: 'Iniciar Sesión'
    },
    common: {
      pleaseWait: 'Por favor, espera...',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      warning: 'Advertencia',
      info: 'Información',
      printRecipe: 'Imprimir Receta'
    },
    recipe: {
      ingredients: 'Ingredientes',
      stepByStep: 'Guía Paso a Paso',
      quickNavigation: 'Navegación Rápida',
      learningNotes: 'Notas de Aprendizaje',
      backToRecipes: 'Volver a Recetas',
      backToDoughTypes: 'Volver a Tipos de Masa',
      switchToPro: 'Cambiar al Modo Pro'
    },
    doughTypes: {
      pizza: 'Pizza',
      bread: 'Pan',
      focaccia: 'Focaccia',
      sourdough: 'Pan de Masa Madre'
    }
  }
};

export default esTranslations;
