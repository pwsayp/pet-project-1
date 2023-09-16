package com.pwsayp.petproject1.util

import java.util.UUID

class UuidUtils {
    companion object {
        fun getUUID() =
            UUID.randomUUID().toString()
    }
}