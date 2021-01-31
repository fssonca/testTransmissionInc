module.exports =  {
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
      "!src/reportWebVitals.ts"
    ],
    coveragePathIgnorePatterns: [
      "./src/*/*.types.{ts,tsx}",
      "./src/index.tsx",
      "./src/serviceWorker.ts"
    ],
    coverageReporters: [
      "json",
      "lcov",
      "text-summary",
      "clover"
    ],
    coverageThreshold: {
      "global": {
        "statements": 95,
        "branches": 95,
        "lines": 95,
        "functions": 95
      }
    },
    snapshotSerializers: [
      "enzyme-to-json/serializer"
    ],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest",
	   "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "src/(.*)$": "<rootDir>/src/$1",
	   "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/fileMock.js"
	  
	  
	  
    }
  }
