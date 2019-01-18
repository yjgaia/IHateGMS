#!/usr/bin/env node

require('uppercase-core');

INIT_OBJECTS();

RUN(() => {
	
	FIND_FILE_NAMES({
		path : './',
		isSync : true
	}, (fileNames) => {
		
		console.log('총 파일 개수: ' + fileNames.length);
		
		EACH(fileNames, (fileName) => {
			
			READ_FILE({
				path : fileName,
				isSync : true
			}, (content) => {
				content = content.toString();
				
				let startIndex = content.indexOf('<YYGML.h>');
				if (startIndex !== -1) {
					
					WRITE_FILE({
						path : fileName,
						isSync : true,
						content : content.substring(0, startIndex) + '"YYGML.h"' + content.substring(startIndex + 9)
					});
				}
			});
		});
		
		console.log('완료');
	});
});

