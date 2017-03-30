        function hasEvent(event, entry) {
          return entry.events.indexOf(event) != -1;
        }
        
        function tableFor(event, journal) {
          var table = [0, 0, 0, 0];
          for (var i = 0; i < journal.length; i++) {
            var entry = journal[i], index = 0;
            if (hasEvent(event, entry)) index += 1;
            if (entry.squirrel) index += 2;
            table[index] += 1;
          }
          return table;
        }
        
        require('./includes.js')
        // ? [76, 9, 4, 1]
        
        console.log(tableFor("pizza",journal));
        