document.getElementById('keyword').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    openUrl();
  }
});

document.getElementById('openUrl').addEventListener('click', openUrl);

function openUrl() {
  const input = document.getElementById('keyword').value;
  const [keyword, ...needleParts] = input.split(' ');
  const needle = needleParts.join(' ');
  let url = '';

  switch (keyword.toLowerCase()) {

	//Google
	case 'g':
	url = needle ? `https://www.google.com/search?q=${encodeURIComponent(needle)}` : 'https://www.google.com/';
	break;
		  
	//Service Now
	case 'sn':
	url = needle ? `https://bhn.service-now.com/now/nav/ui/search/0f8b85d0c7922010099a308dc7c2606a/params/search-term/${encodeURIComponent(needle)}/global-search-data-config-id/c861cea2c7022010099a308dc7c26041/search-context/now%2Fnav%2Fui` : 'https://bhn.service-now.com/';
        break;
	
	//Service Now Hardware
	case 'snhw':
	url = needle ? `https://bhn.service-now.com/now/nav/ui/classic/params/target/alm_hardware_list.do%3Fsysparm_query%3D123TEXTQUERY321%253D${encodeURIComponent(needle)}%26sysparm_first_row%3D1%26sysparm_view%3D` : 'https://bhn.service-now.com/now/nav/ui/classic/params/target/alm_hardware_list.do%3Fsysparm_userpref_module%3D2e1c10722b4b350011376bce59da15ca';
	break;
	
	//Service Now Catalog
	case 'snc':
	url = needle ? `https://bhn.service-now.com/now/nav/ui/classic/params/target/catalog_find.do%3Fsysparm_parent%3D%26sysparm_catalog%3D5eabc27849d2210006cde55a4db0b013%26sysparm_catalog_view%3Dcatalog_testing%26sysparm_processing_hint%3D%26sysparm_tsgroups%3D%26sysparm_view%3Dtext_search%26sysparm_parent_sys_id%3D%26sysparm_parent_table%3D%26sysparm_view%3Dcatalog_testing%26sysparm_collection%3D%26sysparm_collectionID%3D%26sysparm_collection_key%3D%26sysparm_search%3D${encodeURIComponent(needle)}` : 
	  'https://bhn.service-now.com/now/nav/ui/classic/params/target/catalog_home.do%3Fsysparm_view%3Dcatalog_testing';
	break;
	
	//Service Now create INC
	case 'create':
	url = 'https://bhn.service-now.com/now/nav/ui/classic/params/target/incident.do%3Fsys_id%3D-1%26sysparm_stack%3Dincident_list.do%26sysparm_view%3Dinternal%26sysparm_query%3Du_class%253Dinternal%255Econtact_type%253Dwalk-in%255EEQ';
	break;
	
	//DHL
	case 'dhl':
	url = needle ? `https://www.mydhli.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id={encodeURIComponent(needle)}` : 'https://www.mydhli.com/global-en/home/'
	
	//Power Automate
	case 'pa':
	url = 'https://make.powerautomate.com/environments/Default-09f55992-c50c-4562-8657-b1bd6acc36c5/home?auth_upn=dlibb00@bhnetwork.com&utm_source=office&utm_medium=app_launcher&utm_campaign=office_referrals';
	break;
    
	// Add more cases as needed
	
    default:
      url = 'chrome://newtab';
  }

  chrome.tabs.create({ url });
}
