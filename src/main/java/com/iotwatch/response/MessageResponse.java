package com.iotwatch.response;

import com.iotwatch.enums.EnumStatusResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class MessageResponse {
	private String message;

	@Builder.Default
	private int status = EnumStatusResponse.ERROR.getStatus();
}
