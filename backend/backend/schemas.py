from typing import TypedDict, Union
from enum import Enum

user_typeEnum = Enum("user_typeType", ["instructor","student","staff"])

class getUserInfoRequest(TypedDict):
	user_id : str
	user_age : Union[int, float]
	user_type : user_typeEnum


class A_11(TypedDict):
	Request : getUserInfoRequest


class APIs(TypedDict):
	getUserInfo : A_11
