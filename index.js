function introduction (name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage (name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}



function introductionWithLanguageOptional (name, language = "JavaScript") {
    name = "Gracie";
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional()