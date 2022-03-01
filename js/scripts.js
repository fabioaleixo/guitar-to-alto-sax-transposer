let originalNotes = new Array();
let transposedNotes = document.querySelector('.notes-transposed');
const btnCleanForm = document.querySelector('a[data-action=clean-form]');
const transposerForm = document.querySelector('form[data-action=transpose-notes]');

btnCleanForm.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('input[name=original-notes]').value = '';
});

transposerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    transposedNotes.innerHTML = '';
    const originalNotesInput = document.querySelector('input[name=original-notes]').value.toUpperCase();
    originalNotes = originalNotesInput.split(',');
    transposeNotes(originalNotes);
});

const transposeNotes = (originalNotes) => {
    originalNotes.map((note) => {
        note === 'C' && writeTransposeNote('A');
        (note === 'C#' || note === 'DB') && writeTransposeNote('A#');
        note === 'D' && writeTransposeNote('B');
        (note === 'D#' || note === 'EB') && writeTransposeNote('C');
        note === 'E' && writeTransposeNote('C#');
        note === 'F' && writeTransposeNote('D');
        (note === 'F#' || note === 'GB') && writeTransposeNote('D#')
        note === 'G' && writeTransposeNote('E');
        (note === 'G#' || note === 'AB') && writeTransposeNote('F');
        note === 'A' && writeTransposeNote('F');
        (note === 'A#' || note === 'BB') && writeTransposeNote('F#');
        note === 'B' && writeTransposeNote('G');
    });
}

const writeTransposeNote = (note) => {
    transposedNotes.innerHTML += note;
}