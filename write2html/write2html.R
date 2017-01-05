fout <- file("R105/html/result.html")
html <- readChar("R105/html/template.html", file.info("R105/html/template.html")$size)
data <- sprintf("<div class='item'>
                <h3>%s</h3>
                <p class='meta'>%s (nShare=%s, nLike=%s, nComment=%s)</p>
                <p>%s</p><hr>
                </div>\n", all2$id, all2$date, all2$shares_count, all2$like_count, all2$comments_count, all2$message)
data.str <- paste(data, collapse="")
res <- sprintf(html, data.str)
writeLines(res, fout)
close(fout)
