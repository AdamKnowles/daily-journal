
    function getJournalEntries () {
         fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
            .then(journalEntries => {
                console.log(journalEntries);
            })
           
        }

            export { getJournalEntries}