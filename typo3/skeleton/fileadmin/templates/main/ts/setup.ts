#####################################
# Template an Templavoila übergeben #
#####################################

page = PAGE
page.typeNum = 0 
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page

###################
# CSS Includieren #
###################

page.includeCSS {
  custom = fileadmin/templates/main/css/style.css
}

##################
# JS Includieren #
##################

page.includeJS {
   core = fileadmin/templates/main/js/core.js
}
###########################
# Header Datein einbinden #
###########################
page.headerData.999 = TEXT
page.headerData.999.value (
	

)