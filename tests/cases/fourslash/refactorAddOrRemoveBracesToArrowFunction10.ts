/// <reference path='fourslash.ts' />

//// const foo = /*a*/a/*b*/ => { return (1, 2, 3); };

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add or remove braces in an arrow function",
    actionName: "Remove braces from arrow function",
    actionDescription: "Remove braces from arrow function",
    newContent: `const foo = a => (1, 2, 3);`,
});
